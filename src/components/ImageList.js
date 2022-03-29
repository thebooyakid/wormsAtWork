import  React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import usePaintings from '../hooks/usePaintings';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function TitlebarImageList() {

  const {paintings} = usePaintings();
  const navigate = useNavigate();

  return (
    <ImageList sx={{ width: 800, height: 'auto' }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Paintings - make category links here for paintings/pins/etc</ListSubheader>
        {/* maybe use mui chips for category buttons */}
      </ImageListItem>
      {paintings?.map((painting) => (
        <ImageListItem sx={{cursor:'pointer'}} key={painting.id}>
          
          <img onClick={()=>navigate('../painting/'+painting.id)}
            src={painting.img}
            srcSet={painting.img}
            alt={painting.title}
            loading="lazy"
          />
          {/* <Button sx={{marginTop:'-25px'}} size="small" onClick={()=>navigate('../painting/'+painting.id)}>Learn More</Button> */}

          <ImageListItemBar sx={{cursor:'default'}}
            title={painting.title}
            subtitle={painting.medium}
            position="below"
            actionIcon={              
              <>
              <Button size="small" >Add to cart<AddShoppingCartIcon /></Button>
              </>
            }
          />
        </ImageListItem>
        
      ))}
    </ImageList>
  );
}

