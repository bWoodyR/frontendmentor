import AdviceGenerator from "@/components/AdviceGenerator/AdviceGenerator";
import ProductListWithCart from "@/components/ProductListWithCart/ProductListWithCart";
import QRCodeComponent from "@/components/QRCodeComponent/QRCodeComponent";
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
    difficulty: "NEWBIE",
  },
  {
    title: "Product List With Cart",
    description: "",
    slug: "dessert-list",
    component: <ProductListWithCart />,
    image: "/assets/images/product-list-with-cart/product-list-with-cart-tile.png",
    dateCreated: new Date("2024-7-15"),
    labels: [],
    difficulty: "JUNIOR",
  },
  {
    title: "Advice Generator",
    description: "",
    slug: "advice-generator",
    component: <AdviceGenerator />,
    image: "/assets/images/advice-generator/advice-generator-app.png",
    dateCreated: new Date("2024-7-16"),
    labels: [],
    difficulty: "JUNIOR",
  },
  {
    title: "QR Code Component",
    description: "",
    slug: "qr-code-component",
    component: <QRCodeComponent />,
    image: "/assets/images/qr-code-component/qr-code-component.png",
    dateCreated: new Date("2024-7-16"),
    labels: [],
    difficulty: "NEWBIE",
  },
];
