import React from "react";
import {
  Avatar,
  Box,
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  IconButton,
  Chip,
  Button,
} from "@mui/material";
import { green } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Face6Icon from "@mui/icons-material/Face6";

const AccountPage = () => {
  const userBlogs = [
    { id: 1, title: "Top world favorite travel destinations in 2024." },
    {
      id: 2,
      title: "Explore the world of dailtdotdev for amazing daily tech news.",
    },
    {
      id: 3,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 4,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 5,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 6,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 7,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 8,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 9,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
    {
      id: 10,
      title:
        "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
    },
  ];

  return (
    <>
      <Box
        marginBottom={"-80px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        height={"700px"}
        width={"100%"}
        border={"1px solid "}
      >
        {/* Profile Information */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: "300px",
            height: "100%",
            padding: "20px",
            bgcolor: "black",
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
            color: "white",
          }}
        >
          <Avatar
            sx={{ bgcolor: green[500], width: 100, height: 100, margin: 2 }}
          >
            AS
          </Avatar>
          <Chip icon={<Face6Icon />} label="Bislerium Member" color="success" />
          <Box sx={{ marginBottom: 2 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 2, margin: 2 }}
            >
              <PersonIcon />
              <Typography variant="body2">John Doe</Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 2, margin: 2 }}
            >
              <BadgeIcon />
              <Typography variant="body2">JohnDoe619</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                margin: 2,
                maxWidth: "200px",
              }}
            >
              <EmailIcon />
              <Typography
                variant="body2"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                johndosasasasasasasase@example.com
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              sx={{
                color: "white",
                borderColor: "white",
                width: "200px",
                "&:hover": {
                  color: "gray",
                  borderColor: "gray",
                },
              }}
            >
              Edit Profile
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", height: "100%", overflow: "hidden" }}>
          {/* My Blogs Section */}
          <Box
            sx={{
              flex: "1 1 auto",
              paddingRight: "100px",
              marginBottom: "30px",
              width: "100vw",
              paddingLeft: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                paddingLeft: "25px",
                marginTop: 5,
                textAlign: "center",
              }}
            >
              <BorderAllIcon />
              <Typography variant="h6">My Blogs</Typography>
            </Box>
            <Container
              maxWidth="xl"
              sx={{
                height: "90%",
                width: "100%",
                overflowY: "scroll",
                marginBottom: "50px",
              }}
            >
              <Divider sx={{ width: "100%", marginBottom: 2, marginTop: 1 }} />
              {userBlogs.map((blog) => (
                <Card
                  key={blog.id}
                  sx={{ width: "100%", marginBottom: 2 }}
                  elevation={0}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        maxWidth: "calc(50% - 16px)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Box>
                      <IconButton aria-label="edit">
                        <EditIcon sx={{ color: "black" }} />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon sx={{ color: "#d90429" }} />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AccountPage;
