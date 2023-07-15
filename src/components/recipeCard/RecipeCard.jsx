import "./RecipeCard.css";
import { client } from "../contentful/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export const RecipeCard = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    client
      .getEntries()
      .then((entries) => setRecipes(entries))
      .catch(console.error);
  }, []);

  return (
    //     <div id="recipe">
    //       {recipes &&
    //         recipes.items.map((item) => (
    //           <div key={item.sys.id}>
    //             <h2>{item.fields.title}</h2>
    //             <img
    //               src={`https:` + item.fields.image.fields.file.url}
    //               className="App-logo"
    //               alt="logo"
    //             />
    //             <p className="cardDesription">{item.fields.description}</p>
    //             <Link to={`/recipe/${item.sys.id}`}>Go to Recipe</Link>
    //           </div>
    //         ))}
    //     </div>
    //   );
    // };
    <div
      sx={{
        display: "grid",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: 4,
      }}
    >
      {recipes &&
        recipes.items.map((item) => (
          <Card
            className={item.sys.id}
            sx={{
              maxWidth: 345,
              margin: 2,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={`https:` + item.fields.image.fields.file.url}
                alt="Recipe"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.fields.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.fields.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link to={`/recipe/${item.sys.id}`}>Go to Recipe</Link>
              </Button>
            </CardActions>
          </Card>
        ))}
    </div>
  );
};

//BOOTSTRAP
//     <div id="recipe" class="container">
//       {recipes &&
//         recipes.items.map((item) => (
//           <div key={item.sys.id}>
//             <div class="cardcontainer">
//               <h1>{item.fields.title}</h1>

//               <div class="photo">
//                 <img
//                   src={`https:` + item.fields.image.fields.file.url}
//                   className="App-logo"
//                   alt="logo"
//                 />
//                 <div class="photos">Photos</div>
//               </div>
//               <div class="content">
//                 <p class="txt2" className="cardDescription">
//                   {item.fields.description}
//                 </p>
//               </div>
//               <div class="footer">
//                 <p>
//                   <a
//                     class="waves-effect waves-light btn"
//                     href="{`/recipe/${item.sys.id}`}"
//                   >
//                     Read More
//                   </a>
//                   <a id="heart">
//                     <span class="like">
//                       <i class="fab fa-gratipay"></i>Like
//                     </span>
//                   </a>
//                 </p>
//                 <p class="txt3">
//                   <i class="far fa-clock"></i>10 Minutes Ago{" "}
//                   <span class="comments">
//                     <i class="fas fa-comments"></i>45 Comments
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };
