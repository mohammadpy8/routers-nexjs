import { useRouter } from "next/router";

const coursesId = () => {

    const routes = useRouter();
    const id = routes.query.coursesId;

    return (
        <div>
            <h1>courses : #{id}</h1>
        </div>
    );
};

export default coursesId;