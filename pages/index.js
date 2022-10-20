// index.js
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1> Vinodh Boopalan's Blog </h1>
      <Link href="/about">
        <a> About </a>
      </Link>
      <Link href="/files/some.pdf">
        <a> Some PDF </a>
      </Link>
    </div>
  );
}