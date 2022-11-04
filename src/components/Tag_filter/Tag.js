import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as tagStyles from "../../styles/components/tag.module.scss"

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));


export default function LimitTags(props) {
  return (
    // 弄一個class做css
    <div>
      <Autocomplete  
        multiple
        id = {props.name}
        class = {`${tagStyles.tagList} `}
        
        limitTags={1}
        options={props.data}
        size="small"
        getOptionLabel={(option) => option}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField {...params} label={props.name} />
            // placeholder={props.name} />
        )}
        sx={{ 
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'unwrap',
          // width : `${window.innerWidth*0.85*0.3}px` ,
          // gap:2,
          }}
        onChange={(event, value) => {
          const len = value.length;
          console.log(props.name);
          console.log(len);
          console.log(value);
        }}
      />
    </div>
  );
}

const Data = [
    '信號與系統' ,
    '交換電路與邏輯設計',
    '普通物理甲' ,
    '電路學' ,
    '電磁學' 
];

export  function Tag() { 
  const [chipData, setChipData] = React.useState(Data);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
        width: '300px',
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;
        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.title}
              onDelete={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
)}
