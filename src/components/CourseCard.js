import React from 'react';
import {Card, CardContent, CardMedia, Rating, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import DefaultImage from "../../public/default.png";
import {Link} from "gatsby";

const CourseCard = ({blog}) => {
    const imageURL = blog.node.frontmatter.Files___media[0]
        ? blog.node.frontmatter.Files___media[0].file.url
        : DefaultImage;
    const {title, Instructor, Star, Semester, CourseType} = blog.node.frontmatter;

    return (
        <Link to={`/blog/${blog.node.id}`} key={blog.node.id}>
            <Card sx={{
                maxWidth: 300,
                margin: '7px  16px 16px 16px',
                borderRadius: '15px',
                boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
                cursor: 'pointer',
                "&:hover": {background: '#f3f3f3'},
                justifyContent: 'space-between'
            }}>
                {imageURL !== '' && <CardMedia
                    component="img"
                    image={imageURL}
                    height={100}
                    width={100}
                    sx={{margin: 'auto', maxHeight: 200}}
                />}
                <CardContent sx={{backgroundColor: "transparent"}}>
                    <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                        {`${title} ${Instructor}`}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        <Rating name="read-only" value={Star} readOnly/>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {`${Semester}  ${CourseType}`}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default CourseCard;