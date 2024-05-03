import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.popular_blogs}>
        <h3>Popular Blogs</h3>
        <div className={styles.content}>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="example-blog-image.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  5 facts about Rome that will amaze everyone.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  By Anderson Lewis
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </main>
  );
}
