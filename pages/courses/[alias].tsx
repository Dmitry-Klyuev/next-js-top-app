import {withLayout} from "../../layout/Layout";
import axios from "axios";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {TopPageModel} from "../../interfaces/page.interface";
import {ParsedUrlQuery} from "querystring";
import {ProductModel} from "../../interfaces/product.interfece";

const firstCategory = 0;

function Curse({menu, page, products}: CourseProps): JSX.Element {

    return (
        <div>
            {products.title}
        </div>
    );
}


export default withLayout(Curse);

interface PageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

type MenuItem = {
    _id: {
        secondCategory: string
    };
    pages: PageItem[];
};

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
    page: TopPageModel;
    products: ProductModel
}
export const getStaticPaths: GetStaticPaths = async () => {
    const {data: menu} = await axios.post<MenuItem[]>('https://courses-top.ru/api/top-page/find', {
        firstCategory
    });
    return{
        paths: menu.flatMap(el => el.pages.map(elem => `/courses/${elem.alias}`)),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) :Promise<any> => {
    if (!params){
        return {
            notFound: true
        };
    }

    const {data: menu} = await axios.post<MenuItem[]>('https://courses-top.ru/api/top-page/find', {
        firstCategory
    });
    const {data: page} = await axios.get<TopPageModel>(`https://courses-top.ru/api/top-page/byAlias/${params.alias}`, );
    const {data: products} = await axios.post<ProductModel[]>('https://courses-top.ru/api/product/find', {
        category: page.category,
        limit: 10
    } );
    return {
        props: {
            menu,
            firstCategory,
            page,
            products,

        }
    };
};

