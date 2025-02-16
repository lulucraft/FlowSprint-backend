import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from '@controllers/api/user/user.service';

@Controller('api/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() user: any) {
        return this.userService.create(user);
    }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.userService.findOne(id);
    }
}

// router.post('/users', async (req: Request, res: Response) => {
//     // try {
//     //     const user = new User(req.body);
//     //     await user.save();
//     //     res.status(201).send(user);
//     // } catch (error) {
//     //     res.status(400).send(error);
//     // }
// });

// router.get('/', async (req: Request, res: Response) => {
//     try {
//         // const rows = await db.query('SELECT * FROM users');
//         // res.json(rows);
//     } catch (error) {
//         res.status(500).json({ message: 'Erreur serveur', error });
//     }
//     // try {
//     //     const users = await User.find();
//     //     res.status(200).send(users);
//     // } catch (error) {
//     //     res.status(500).send(error);
//     // }
// });

// router.get('/users/:id', async (req: Request, res: Response) => {
//     // try {
//     //     const user = await User.findById(req.params.id);
//     //     if (!user) {
//     //         return res.status(404).send();
//     //     }
//     //     res.status(200).send(user);
//     // } catch (error) {
//     //     res.status(500).send(error);
//     // }
// });

// router.patch('/users/:id', async (req: Request, res: Response) => {
//     // try {
//     //     const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     //     if (!user) {
//     //         return res.status(404).send();
//     //     }
//     //     res.status(200).send(user);
//     // } catch (error) {
//     //     res.status(400).send(error);
//     // }
// });

// router.delete('/users/:id', async (req: Request, res: Response) => {
//     // try {
//     //     const user = await User.findByIdAndDelete(req.params.id);
//     //     if (!user) {
//     //         return res.status(404).send();
//     //     }
//     //     res.status(200).send(user);
//     // } catch (error) {
//     //     res.status(500).send(error);
//     // }
// });

// export default router;