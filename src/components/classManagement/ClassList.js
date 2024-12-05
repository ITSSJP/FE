/* eslint-disable react/prop-types */
import { Box, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ClassList = ({ classes }) => {
  return (
    <Grid container spacing={2}>
      {classes.map((classItem) => (
        <Grid item xs={12} sm={6} md={4} key={classItem.id}>
          <Box sx={{ border: '1px solid #ccc', borderRadius: 2, padding: 2 }}>
            <Typography variant="h6">{classItem.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {classItem.members} thành viên
            </Typography>
            <Link to={`/class/${classItem.id}`}>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ marginTop: 2 }}
              >
                Xem Bài Học
              </Button>
            </Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ClassList;
