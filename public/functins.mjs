export async function get_hello(req,res) {
    const name= req.params.name
    const url=`https://api.agify.io?name=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    res.send(data)
}
export async function gender_prediction(req,res) {
    const name= req.params.name
    const url=`https://api.genderize.io?name=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    res.send(data)
}
export async function predict_nationality(req,res) {
    const name=req.params.name
    const url=`https://api.nationalize.io?name=${name}`
    const response = await fetch(url);
    const data = await response.json();
    res.send(data)
}