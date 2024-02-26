import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const SkeletonComponent = () => {

    const skeletonList = new Array(1).fill("")

     

  return (

    <>
 
 <Grid container wrap="wrap" style={{width:'100%', justifyContent:'center'}}>
      {skeletonList.map((_, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
          <Skeleton variant="rectangular" width={210} height={118}   />
         
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          
        </Box>
      ))}
    </Grid>

          
   
    </>
 
  )
}

export default SkeletonComponent