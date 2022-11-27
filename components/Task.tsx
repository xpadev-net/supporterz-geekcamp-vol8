import { Box, Paper, Slider } from "@mui/material";

type props = {
  task: Task;
};

const Task = ({ task }: props) => {
  class DateInfo {
    constructor(
      private month: number,
      private date: number,
      private day: string,
      private hour: number,
      private minute: number
    ) {}
    intro(this: DateInfo) {
      console.log("期限:");
      console.log(
        `～${this.month}/${this.date}(${this.day}) ${this.hour}:${this.minute}`
      );
    }
  }
  const dateInfo = new DateInfo(1, 1, "月", 23, 59);

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
            <div className={`${dateInfo.intro()} taskExp-style`} />
          </div>
          <div className="taskCont-box">
            <div className="taskCont-style">{task.content}</div>
          </div>
          <Slider
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </div>
      </Paper>
    </Box>
  );
};

export { Task };
