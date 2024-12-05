import { Grid, Box } from '@mui/material';
import PageContainer from '../../components/container/PageContainer';

// Components for HomePage
import WelcomeCard from '../../components/home/WelcomeCard';
import RecentActivities from '../../components/home/RecentActivities';
import QuickLinks from '../../components/home/QuickLink';

const HomePage = () => {
  return (
    <PageContainer >
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <WelcomeCard />
          </Grid>
          <Grid item xs={12} lg={8}>
            <RecentActivities />
          </Grid>
          <Grid item xs={12} lg={4}>
            <QuickLinks />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default HomePage;
