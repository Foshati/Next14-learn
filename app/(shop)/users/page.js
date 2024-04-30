import { Suspense } from "react";
import UserTable from "@/components/UserTable";

export default function Users() {
  return (
    <main className="m-4">
      <Suspense fallback={<div>Loading...</div>}>
        <UserTable />
      </Suspense>
    </main>
  );
}
