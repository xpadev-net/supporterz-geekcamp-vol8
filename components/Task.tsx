import { Box, Paper, Slider } from "@mui/material";

type props = {
  task: Task;
};

const Task = ({ task }: props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 512,
        },
      }}
    >
      <Paper elevation={3}>
        <div className="task-box">
          <div className="taskTitle-box">
            <div className="taskTitle-style">{task.title}</div>
          </div>
          <div className="taskExp-box">
            <div className="taskExp-style">{task.expired}</div>
          </div>
          <div className="taskCont-box">
            <div className="taskCont-style">{task.content}</div>
          </div>
          <Slider
            defaultValue={(task as TaskNoChild).progress}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </div>
      </Paper>
    </Box>
  );
};

export { Task };
