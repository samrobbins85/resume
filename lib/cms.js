async function fetchAPI(query, { variables } = {}) {
	const res = await fetch("https://graphql.datocms.com/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.DATOCMS_TOKEN}`,
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});
	const json = await res.json();

	if (json.errors) {
		throw new Error("Failed to fetch API");
	}

	return json.data;
}

export default async function getData() {
	const data = await fetchAPI(`
    {
        cv {
          name
          linkedin
          github
          email
          website
        }
      }
    `);
	return data.cv;
}
