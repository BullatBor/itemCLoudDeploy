import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Button,
  Alert,
  Grid,
  Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const ShoeSizeChart = () => {
  const [rows, setRows] = useState([['Заголовок']]);
  const [error, setError] = useState('');
  const numCols = rows[0]?.length || 0; //Обработка пустого массива

  const handleCellChange = (rowIndex: number, columnIndex: number, value: string) => {
    const newRows = [...rows];
    if (columnIndex > 0 && isNaN(parseFloat(value))) {
      setError('Некорректный ввод: должно быть число.');
      return;
    }
    setError('');
    newRows[rowIndex][columnIndex] = value;
    setRows(newRows);
  };

  const addColumn = () => {
    const newRows = rows.map((row) => [...row, '']);
    setRows(newRows);
  };

  const deleteColumn = (columnIndex: number) => {
    if (numCols <= 1) return; // Нельзя удалить последний столбец
    const newRows = rows.map((row) => row.filter((_, index) => index !== columnIndex));
    setRows(newRows);
  };

  const addRow = () => {
    const newRow = Array(numCols).fill('');
    setRows([...rows, newRow]);
  };

  const deleteRow = (rowIndex: number) => {
    const newRows = rows.filter((_, index) => index !== rowIndex);
    setRows(newRows);
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
        Таблица размеров
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TableContainer component={Paper} sx={{ overflow: 'auto' }}>
        <Table sx={{ overflow: 'auto' }}>
          <TableHead>
            <TableRow>
              {Array.from({ length: numCols }, (_, index) => (
                <TableCell key={index}>
                  {index > 0 && ( // Кнопка удаления для всех столбцов кроме первого
                    <IconButton onClick={() => deleteColumn(index)} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  )}
                </TableCell>
              ))}
              <TableCell>
                <IconButton onClick={addColumn} aria-label="add">
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ overflow: 'auto' }}>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, columnIndex) => (
                  <TableCell key={`${rowIndex}-${columnIndex}`} sx={{ p: '4px' }}>
                    <TextField
                      value={cell || ''}
                      onChange={(e) => handleCellChange(rowIndex, columnIndex, e.target.value)}
                      fullWidth
                      type={columnIndex > 0 ? 'number' : 'text'}
                      sx={{ minWidth: '100px' }}
                    />
                  </TableCell>
                ))}
                <TableCell>
                  <IconButton onClick={() => deleteRow(rowIndex)} aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Button onClick={addRow} variant="contained" color="primary">
          Добавить строку
        </Button>
      </div>
    </Grid>
  );
};

export default ShoeSizeChart;
