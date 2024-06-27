// Aqui é onde ficara todas as rotas
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Pages/Layout/Layout";

export const Rotas = createBrowserRouter([{
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
                // se n digitar nada vai para o Home
        },
        // {
        //     path: "/Quem-somos",
        //     element: <QuemSomos></QuemSomos>
        //         // se digitar " /Quem-somos" vai para os QuemSomos
        // },
        // {
        //     path: "/Cursos",
        //     element: <Cursos></Cursos>
        //         // se digitar " /Cursos" vai para os cCursos
            
        // },
        // {
        //     path: "/Blog",
        //     element: <Blog></Blog>
        // }
        

    ]
    // ,errorElement: <ErrorPage></ErrorPage>
        // se digitar qualquer coisa diferente (ex: "/animes") vai para a pagina de erro
}])