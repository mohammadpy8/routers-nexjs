import { useRouter } from "next/router"

function aticles() {

    const router = useRouter();
    const slugs = router.query.slugs || [];

    if (slugs.length > 1) {
        return <h3>this article is return by {slugs[0]} at {slugs[1]}</h3>
    }

  return (
    <div>
          <h1>article</h1>
    </div>
  )
}

export default aticles
