import './RecipeCard.css';
import { client } from '../contentful/client';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

export const RecipeCard = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    client
      .getEntries()
      .then((entries) => setRecipes(entries))
      .catch(console.error);
  }, []);

  return (
    <Grid
      className="grid"
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      justifyContent={'center'}
    >
      {recipes &&
        recipes.items.map((item) => (
          <Card
            className={item.sys.id}
            sx={{
              width: 345,
              margin: 2,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="190"
                image={`https:` + item.fields.image.fields.file.url}
                alt="Recipe"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {item.fields.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {item.fields.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
              >
                <Link to={`/recipe/${item.sys.id}`}>Go to Recipe</Link>
              </Button>
            </CardActions>
          </Card>
        ))}
    </Grid>
  );
};
