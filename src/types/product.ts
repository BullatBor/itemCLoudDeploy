// types
import { Products, Reviews, Address } from 'types/e-commerce';
import { KeyedObject } from 'types';

// ==============================|| TYPES - PRODUCT ||============================== //

export interface ProductCardProps extends KeyedObject {
  id?: string | number;
  color?: string;
  name: string;
  image: string;
  description?: string;
  offerPrice?: number;
  salePrice?: number;
  rating?: number;
}

export interface ProductStateProps {
  products: Products[];
  productsAll: IProductInfo[];
  product: Products | null;
  relatedProducts: Products[];
  reviews: Reviews[];
  addresses: Address[];
  error: object | string | null;
}

export interface IMySelectOptions {
  value: string;
  label?: string;
}

export interface IProductInfo {
  id: number;
  name?: string;
  category?: string;
  brand?: string;
  size?: IMySelectOptions[];
  sizeCountry?: string;
  description?: string;
  additionalMaterials?: string[];
  gender?: string;
  image?: string;
}

export interface IProductForm extends IProductInfo {
  relatedProducts?: IProductInfo[];
  sameCollectionProducts?: IProductInfo[];
  sameModelProducts?: IProductInfo[];
  imgFiles: IFile[];
  videoFiles: IFile[];
}

export interface IFile {
  name: string;
  url: string;
  type: string;
}

export interface ISpecifications {
  weight?: string;
  usage?: string;
  top?: string;
  sole?: string;
  features?: string;
  lacingMode?: string;
  soleType?: string;
  sockType?: string;
  mainColor?: string;
  height?: string;
  season?: string;
  article?: string;
  officialPrice?: string;
  releaseDate?: string;
  set?: string;
  materials?: string;
  style?: string;
  category?: string;
}

export type FileType = 'image' | 'video' | 'videoWrapper';
