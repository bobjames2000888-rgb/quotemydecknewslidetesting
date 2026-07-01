import { useState, useRef } from "react";
import { Clock, ArrowLeft, ArrowRight, FileText, Upload, X } from "lucide-react";

interface DescriptionStepProps {
  trade: string;
  onNext: (description: string) => void;
  onBack: () => void;
}

const DescriptionStep = ({ trade, onNext, onBack }: DescriptionStepProps) => {
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const tradeLower = trade.toLowerCase();

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    setFiles((prev) => [...prev, ...Array.from(newFiles)]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-muted">
      <main className="w-full max-w-[720px] bg-card rounded-2xl shadow-xl p-6 sm:p-10 md:p-14">
        {/* Header */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Clock className="w-4 h-4" />
              <span>Step 3 of 5</span>
            </div>
            <div className="flex-grow mx-4 relative h-1.5 bg-brand-orange-light rounded-full">
              <div className="absolute left-0 top-0 h-full bg-brand-orange rounded-full" style={{ width: "60%" }}></div>
            </div>
            <div className="text-brand-orange text-sm font-semibold">60% Complete</div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
            Describe your {tradeLower} job
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            The more detail you add, the more accurate your quotes will be.
          </p>
        </section>

        {/* Job Description */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-foreground" />
            <label className="font-bold text-foreground" htmlFor="job-description">Job Description</label>
          </div>
          <textarea
            className="w-full h-40 p-5 border-2 border-brand-orange rounded-xl focus:ring-0 focus:outline-none text-foreground text-base sm:text-lg resize-none bg-card"
            id="job-description"
            placeholder={`e.g. Replace broken wooden ${tradeLower} along the backyard`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p className="mt-3 text-sm text-muted-foreground">
            Example: "Build 20sqm timber deck in backyard. Standard height. Include stairs."
          </p>
        </section>

        {/* Photo Upload */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <Upload className="w-5 h-5 text-foreground" />
            <span className="font-bold text-foreground">Add a photo</span>
            <span className="text-muted-foreground font-normal text-sm sm:text-base">Optional — but adding a photo increases quote accuracy by up to 32%.</span>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,.pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />

          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="border-2 border-dashed border-border rounded-xl p-10 flex flex-col items-center justify-center bg-muted/50 cursor-pointer hover:bg-muted transition-colors"
          >
            <Upload className="w-10 h-10 text-muted-foreground mb-3" />
            <p className="text-muted-foreground text-base sm:text-lg">Click to upload or drag and drop</p>
            <p className="text-muted-foreground text-xs mt-1">Images, PDF, DOC</p>
          </div>

          {/* Uploaded file previews */}
          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center gap-3 bg-muted rounded-lg p-3">
                  {file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-10 h-10 rounded object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded bg-brand-orange-light flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-brand-orange" />
                    </div>
                  )}
                  <span className="text-sm text-foreground truncate flex-grow">{file.name}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                    className="text-muted-foreground hover:text-destructive transition-colors flex-shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex-1 py-4 px-6 border border-border bg-muted rounded-xl font-bold text-muted-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <button
            onClick={() => onNext(description)}
            className="flex-[2] py-4 px-6 bg-brand-orange rounded-xl font-bold text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>
        </nav>
      </main>
    </div>
  );
};

export default DescriptionStep;
