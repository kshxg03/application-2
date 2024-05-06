import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Pagination,
  Typography,
} from "@mui/material";

const BlogsPage = () => {
  const cardsData = [
    {
      title: "5 facts about Rome that will amaze everyone.",
      author: "Anderson Lewis",
      image: "1.jpg",
    },
    {
      title: "The ultimate guide to hiking trails in the Rockies.",
      author: "Emily Johnson",
      image: "2.jpg",
    },
    {
      title: "10 delicious recipes for homemade pizza.",
      author: "Michael Smith",
      image: "3.jpg",
    },
    {
      title: "Discovering the wonders of Machu Picchu.",
      author: "Sophia Garcia",
      image: "4.jpg",
    },
    {
      title: "Exploring the streets of Tokyo: A travel diary.",
      author: "Daniel Brown",
      image: "5.jpg",
    },
    {
      title: "The best beaches for your next tropical vacation.",
      author: "Olivia White",
      image: "6.jpg",
    },
    {
      title: "Top 10 hiking trails in California.",
      author: "Emma Robinson",
      image: "7.jpg",
    },
    {
      title: "5 easy steps to start your own vegetable garden.",
      author: "James Miller",
      image: "8.jpg",
    },
    {
      title: "A beginner's guide to meditation and mindfulness.",
      author: "Ava Martinez",
      image: "9.jpg",
    },
    {
      title: "The history of jazz music: A fascinating journey.",
      author: "David Wilson",
      image: "example-blog-image.jpg",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          marginLeft: "25px",
          marginRight: "25px",
          paddingLeft: "63px",
        }}
      >
        <Typography
          variant="h5"
          mr="55px"
          sx={{ color: "#333", fontWeight: "bold" }}
        >
          Explore Blogs
        </Typography>
        <ButtonGroup
          color="primary"
          variant="text"
          size="small"
          sx={{
            "& .MuiButtonGroup-grouped": {
              borderRight: "1px solid black", // Change this to your desired color
            },
            "& .MuiButton-root": {
              paddingLeft: "15px",
              paddingRight: "15px", // Adjust the margin to add spacing between buttons
            },
            "& .MuiButtonGroup-grouped:last-child": {
              borderRight: "none", // Remove border from all buttons except the last one
            },
          }}
        >
          <Button sx={{ color: "black" }}>All</Button>
          <Button sx={{ color: "black" }}>Popular</Button>
          <Button sx={{ color: "black" }}>Latest</Button>
        </ButtonGroup>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          marginLeft: "25px",
          marginRight: "25px",
        }}
      >
        {cardsData.map((card, index) => (
          <Card
            sx={{
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 0,
              "&:hover": {
                transform: "scale(1.1)",
                backgroundColor: "white",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia
                component="img"
                height="200"
                image={card.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  {card.title}
                </Typography>
                <Typography fontSize={12} color="text.secondary">
                  {card.author}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
          marginLeft: "25px",
          marginRight: "25px",
        }}
      >
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Box>
    </Container>
  );
};

export default BlogsPage;
