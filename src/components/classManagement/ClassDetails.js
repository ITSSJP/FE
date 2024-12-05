import { Box, Grid, Typography, Paper } from '@mui/material';
import LessonList from '../../components/classManagement/LessonList';

const ClassDetail = () => {
  // Giả lập dữ liệu bài học và thành viên
  const lessons = [
    { id: 1, title: 'Bài học 1: Giới thiệu bảng chữ cái Hiragana', description: 'Học cách đọc và viết bảng chữ cái Hiragana' },
    { id: 2, title: 'Bài học 2: Từ vựng cơ bản', description: 'Những từ vựng cơ bản trong tiếng Nhật' },
    { id: 3, title: 'Bài học 3: Ngữ pháp cơ bản', description: 'Câu khẳng định, phủ định, và câu hỏi trong tiếng Nhật' },
  ];

  const members = 35; // Số lượng thành viên trong lớp

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        {/* Cột chính: Danh sách bài học */}
        <Grid item xs={12} md={9}>
          <LessonList lessons={lessons} />
        </Grid>

        {/* Thanh bên phải: Thông tin lớp */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Thông tin lớp học
            </Typography>
            <Typography variant="body1">Số lượng thành viên: {members}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClassDetail;
