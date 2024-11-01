export function Home(){
    return(
        <div>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
        </div>
    )
}