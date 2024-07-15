import ProductListWithCart from "@/components/ProductListWithCart/ProductListWithCart";
import ResultSummaryComopnents from "@/components/ResultsSummaryComponent/ResultSummaryComopnents";
import { Project } from "@/types/ProjectType";

export const projects: Project[] = [
  {
    title: "Result Summary Component",
    description: "",
    slug: "result-summary-component",
    component: <ResultSummaryComopnents />,
    image: "/assets/images/result-summary-component/results-summary-component.png",
    dateCreated: new Date("2024-7-13"),
    labels: [],
  },
  {
    title: "Product List With Cart",
    description: "",
    slug: "product-list-with-cart",
    component: <ProductListWithCart />,
    image: "/assets/images/product-list-with-cart/product-list-with-cart-tile.png",
    dateCreated: new Date("2024-7-15"),
    labels: [],
  },
  {
    title: "Advice Generator",
    description: "",
    slug: "advice-generator",
    component: <ProductListWithCart />,
    image: "/assets/images/advice-generator/advice-generator-tile.png",
    dateCreated: new Date("2024-7-15"),
    labels: [],
  },
];
