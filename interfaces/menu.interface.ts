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

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}