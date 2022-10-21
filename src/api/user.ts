import express, {Request, Response, Router} from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!
import users from "./data/user"

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
    status: 200,
    message: "유저 조회 성공",
    data:users
    });
});

router.post("/", (req:Request, res:Response)=>{
    const body=req.body;

    users.push(body);

    console.log(users);

    return res.status(200).json({
        status:200,
        message:"유저 추가 성공",
        data:users
    });
});

module.exports = router;