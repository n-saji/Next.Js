import Link from "next/link";
export default function LinkToPage({
  classname,
  link_class_name,
}: {
  classname: string;
  link_class_name?: string;
}) {
  return (
    <div className={classname}>
      <Link href="/users" className={`hover:text-blue-500 ${link_class_name}`}>
        Users
      </Link>
      <Link href="/input" className={`hover:text-blue-500 ${link_class_name}`}>
        Input
      </Link>
      <Link
        href="/styling"
        className={`hover:text-blue-500 ${link_class_name}`}
      >
        Styling
      </Link>
    </div>
  );
}
