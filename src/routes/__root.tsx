import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GrainOverlay } from "@/components/GrainOverlay";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <p className="font-hand text-2xl text-brown">you wandered off the trail</p>
        <h1 className="mt-2 font-display text-7xl text-foreground">404</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This page is somewhere between two mountains. Let's get you back.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block font-display text-base underline-hand"
        >
          Go home →
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">
          Something didn't load
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The signal here can be weak. Try again or head home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full border border-foreground/30 px-5 py-2.5 text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full bg-forest px-5 py-2.5 text-sm text-paper hover:opacity-90 transition-opacity"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HeraXopun - Memories from Northeast India" },
      {
        name: "description",
        content:
          "A travel community archiving real journeys across Northeast India — memories, stories, aftermovies, and the next adventure.",
      },
      { name: "author", content: "HeraXopun" },
      { property: "og:title", content: "HeraXopun - Memories from Northeast India" },
      {
        property: "og:description",
        content: "Not tourists. Just people chasing stories together.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500&family=Caveat:wght@400;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen bg-paper text-foreground">
        <SiteHeader />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
        <GrainOverlay />
      </div>
    </QueryClientProvider>
  );
}
