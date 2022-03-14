import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { detectDevice, docToObject } from "../../helper";
import HomeLoader from "../Loaders/HomeLoader";
import placeholder from "../../assets/site/placeholder.png";
import useCategories from "../../hooks/useCategories";

export default function Home() {
  const { categories, loading } = useCategories();
  return (
    <>
      {loading ? (
        <HomeLoader />
      ) : (
        <ImageList cols={detectDevice() == "mobileLg" ? 1 : 2} component="div">
          {categories?.map((category) => {
            return (
              <ImageListItem key={category.id}>
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  loading="lazy"
                  placeholder={placeholder}
                />
                <ImageListItemBar
                  title={category.name}
                  subtitle={category.tagline}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${category.name}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      )}
    </>
  );
}
