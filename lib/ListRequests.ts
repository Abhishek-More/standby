export const ListRequests = {
  subscribe: (email: string) => {
    return fetch("/api/list/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
  },

  fetchCount: async () => {
    const res = await fetch("/api/list/fetch-count", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to create scaffold");
    }

    const data = await res.json();
    const count: number = data.count;
    return count;
  },
};
