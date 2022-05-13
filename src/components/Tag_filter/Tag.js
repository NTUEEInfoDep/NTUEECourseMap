import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));


export default function LimitTags() {
  return (
    <div>
      <Autocomplete
        multiple
        id="Teacher"
        
        limitTags={1}
        options={Data}
        size="small"
        getOptionLabel={(option) => option.title}
        defaultValue={[Data[0], Data[1]]}
        renderInput={(params) => (
          <TextField {...params} label="Teacher" 
            placeholder="Teacher" />
        )}
        sx={{ 
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'unwrap',
          width : `${window.innerWidth*0.85*0.3}px` ,
          }}
        onChange={(event, value) => {
          const len = value.length;
          let stringLen = 0;
          for (let i = 0; i < len; i++) {
            const item = value[i];
            stringLen += item.title.length;
            if (stringLen > 10) { 
              let limitSize = i+1;
              console.log(limitSize);
              // document.getElementById('Teacher').limitTags={limitSize};
              break;
            }
          }
          

        }}
      />
    </div>
  );
}

const Data = [
    { key: 0, title: '信號與系統' },
    { key: 1, title: '交換電路與邏輯設計' },
    { key: 2, title: '普通物理甲' },
    { key: 3, title: '電路學' },
    { key: 4, title: '電磁學' },
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
        flexWrap: 'wrap',
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


// <Paper
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'wrap',
//         listStyle: 'none',
//         p: 0.5,
//         m: 0,
//       }}
//       component="ul"
//     >
//       {chipData.map((data) => {
//         let icon;

//         if (data.label === 'React') {
//           icon = <TagFacesIcon />;
//         }

//         return (
//           <ListItem key={data.key}>
//             <Chip
//               icon={icon}
//               label={data.label}
//               onDelete={data.label === 'React' ? undefined : handleDelete(data)}
//             />
//           </ListItem>
//         );
//       })}
//     </Paper>