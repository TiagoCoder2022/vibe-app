import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";

async function Page() {
  const queryClinet = getQueryClient();
  void queryClinet.prefetchQuery(
    trpc.createAI.queryOptions({ text: "Antonio Prefetch" })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClinet)}>
      <Suspense fallback={<p>Loading...</p>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  );
}

export default Page;
