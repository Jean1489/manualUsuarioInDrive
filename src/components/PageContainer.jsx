export default function PageContainer({ children }) {
    return (
        <div className="max-w-4xl mx-auto p-4 md:p-6 animate-fadeIn">
            {children}
        </div>
    );
}
