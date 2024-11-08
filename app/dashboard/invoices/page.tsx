const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
export default async function Page() {
    await delay(3000);
    return <p>Invoices Page</p>
}
