export const homepage = async (req, res)=>{
    const locals = {
        title: "NodeJs Blog",
        description: "Simple Nodejs Blog"
    }
    res.render("home", {locals});
}

// export  const 