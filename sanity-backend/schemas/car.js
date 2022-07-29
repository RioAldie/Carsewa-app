import { Category } from '@mui/icons-material';

export default {
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'image',
      type: 'file',
    },
    {
      name: 'carId',
      title: 'Id',
      type: 'string',
    },
    {
      name: 'cost',
      title: 'Rental Cost',
      type: 'number',
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      name: 'transmision',
      title: 'Transmision',
      type: 'string',
    },
    {
      name: 'seat',
      title: 'Seats',
      type: 'number',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
    },
  ],
};
