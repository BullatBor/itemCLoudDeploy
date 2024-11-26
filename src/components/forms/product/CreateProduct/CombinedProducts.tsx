import { Typography, Grid, ImageListItem, ImageList } from '@mui/material';
import { FC, memo, SyntheticEvent } from 'react';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { IProductForm } from 'types/product';

interface ICombinedProducts {
    formik: any;
    openModal: (value: boolean) => void;
    setNewProduct: (product: IProductForm) => void
}

const CombinedProducts: FC<ICombinedProducts> = ({ formik, setNewProduct, openModal }) => {

    const deleteHandler = (index: number, e: SyntheticEvent) => {
        const newArr = formik.values.combinedProducts.filter((_: any, i: number) => i !== index);
        formik.setFieldValue('combinedProducts', newArr);
        e.stopPropagation()
    }

    return (
        <Grid item xs={12}>
            <Grid item xs={12} sx={{ border: '1px grey solid', borderRadius: '10px', px: '14px', py: '15px' }}>
                <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
                    Объединенные товары
                </Typography>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: '4px' }}>
                        <ImageList
                            sx={{ width: 'fit-content', height: 'fit-content', display: 'flex', my: 0, flexWrap: 'wrap', gap: '8px' }}
                            cols={6}
                            rowHeight={100}
                        >
                            {formik.values.combinedProducts.map((item: IProductForm, index: number) => {
                                return (
                                    <ImageListItem key={item.name} sx={{ position: 'relative', width: '90px', cursor: "pointer" }} onClick={() => setNewProduct(item)}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{ flexGrow: 'inherit', border: '1px solid grey', borderRadius: '8px', height: '100%' }}
                                        />
                                        <Box
                                            onClick={(e) => deleteHandler(index, e)}
                                            sx={{
                                                position: 'absolute',
                                                right: '2px',
                                                top: '5px',
                                                cursor: 'pointer',
                                                borderRadius: '100%'
                                            }}
                                        >
                                            <DeleteForeverOutlinedIcon />
                                        </Box>
                                    </ImageListItem>
                                );
                            })}
                        </ImageList>
                        <Box
                            sx={{
                                width: 'fit-content',
                                borderRadius: '10px',
                                backgroundColor: '#D3D3D3',
                                transition: '0.3s',
                                '&:hover': {
                                    cursor: 'pointer',
                                    backgroundColor: '#C0C0C0'
                                }
                            }}
                            onClick={() => openModal(true)}
                        >
                            <div
                                style={{ width: '70px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <AddIcon color="secondary" />
                            </div>
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default memo(CombinedProducts)