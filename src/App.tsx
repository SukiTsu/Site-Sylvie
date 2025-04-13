import { BrowserRouter, Routes, Route, data } from "react-router-dom";
import Home from "./page/Home";
import dataPage from "./page/DescriptionPageData";
import ContainerPageDescription from "./component/ContainertPageDescription";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {dataPage.map((routePage) => (
          <Route path={routePage.route} element={
            <ContainerPageDescription title={routePage.title} img={routePage.img} content={routePage.content} key={routePage.route}/>
          } key={routePage.title+routePage.route}/>
        ))}
      </Routes>
    </BrowserRouter>
  )
}
export default App
