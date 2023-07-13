import { useState, useEffect } from "react";
import { createClient } from "contentful";

// ...

export const Fetchrecipes = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: "9c15i94f7spw",
      accessToken: "DCETSShAU8BeeCAJg1ZjSUBGdZh0N1lssCVmgUjZOXg",
    });

    const fetchContent = async () => {
      try {
        const response = await client.getEntries({
          content_type: "process",
        });
        const content = response.items;
        setContent(content);
      } catch (error) {
        // Handle error
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      {content.map((item) => (
        <div key={item.sys.id}>
          <h2>{item.fields.title}</h2>
          <p>{item.fields.description}</p>
          {/* Render other fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default Fetchrecipes;
