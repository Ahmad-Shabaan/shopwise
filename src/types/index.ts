export type INavLink = {
  icon: string;
  route: string;
  label: string;
};

export type IFeatures = {
  icon: string;
  title: string;
  description: string;
};

export type ISale = {
  imgURL: string;
  title: string;
  description: string;
};

export type IProduct = {
  imgURL: string;
  loveIcons: string[];
  name: string;
  price: string;
  oldPrice: string;
  ratingIcons: string[];
  users: number;
};

export type ILogo = {
  imgURL: string;
  title: string;
};

export type IContact = {
  icon: string;
  url: string;
};


export type cardProps = {
  targetProduct: IProduct; 
}

export type saleProps = {
  targetSale : ISale
}