export class Food{
  // colocando '!' na frente do atributo, dizemos que este é obrigatorio em
  // qualquer instanciamente de uma nova Comida
  // se colocar '?' na frente, esse atributo é opcional na hora da instanciação
  id!: number;
  name!: string;
  price!: number;
  tags?: string[];
  favorite: boolean = false;
  stars: number = 0;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;

}
