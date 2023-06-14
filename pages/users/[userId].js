import { useRouter } from "next/router";

const userId = () => {

    const router = useRouter();
    const id = router.query.userId;

    return (
        <div>
            <h1>user # {id}</h1>
        </div>
    );
};

export default userId;