import ProductListWithCart from "@/components/ProductListWithCart/ProductListWithCart";
import ResultSummaryComopnents from "@/components/ResultsSummaryComponent/ResultSummaryComopnents";
import { Project } from "@/types/ProjectType";

export const projects: Project[] = [
  {
    title: "Result Summary Component",
    description: "A modern and mobile-friendly landing page design.",
    slug: "result-summary-component",
    component: <ResultSummaryComopnents />,
    image: "/assets/images/result-summary-component/results-summary-component.png",
    dateCreated: new Date("2024-7-13"),
  },
  {
    title: "Product List With Cart",
    description: "A modern and mobile-friendly landing page design.",
    slug: "product-list-with-cart",
    component: <ProductListWithCart />,
    image: "/assets/images/product-list-with-cart/product-list-with-cart.png",
    dateCreated: new Date("2024-7-13"),
  },
];
