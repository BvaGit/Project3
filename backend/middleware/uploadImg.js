module.exports = function ( req, res, next ){
    
    let filedata = req.file;
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");

    next();

}