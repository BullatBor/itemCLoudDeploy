import { FC, useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TextField, Typography } from '@mui/material';
import { CATEGORIES, shoeCategoryDictionary } from './Constants';

interface PROPS {
  formik: any;
  onChange: (category: string) => void;
}

const MultiLevelList: FC<PROPS> = ({ formik, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState<string[]>(formik.values.category.path || []);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLInputElement>(null);
  const isExpansiveItem = useRef(true);

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && listRef.current) {
      const target = event.target as Node;
      if (!inputRef.current.contains(target) && !listRef.current.contains(target)) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const test2 = (e: any, node: any) => {
    if (node) {
      const [nodeId, level] = node.split('.');
      const newPath = [...path.filter((_, index) => index <= level)];
      newPath[level as never] = shoeCategoryDictionary[nodeId as string];
      setPath(newPath);
      onChange(newPath[0]);
      if (!isExpansiveItem.current) {
        setIsOpen(false);
        formik.setFieldValue('category', { value: node, path: newPath })
      }
      isExpansiveItem.current = false;
    }
  };

  const handleExpansiveItems = () => {
    isExpansiveItem.current = true;
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
        Категория товара
      </Typography>
      <TextField
        ref={inputRef}
        label="Категория"
        value={path.join('->')}
        onClick={() => setIsOpen(true)}
        fullWidth
        autoComplete="cc-number"
      />
      {isOpen && (
        <Box ref={listRef} sx={{ height: 'auto', width: '100%' }}>
          <RichTreeView onSelectedItemsChange={test2} onExpandedItemsChange={handleExpansiveItems} items={CATEGORIES} />
        </Box>
      )}
    </Grid>
  );
};

export default MultiLevelList;
