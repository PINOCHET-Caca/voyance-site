// signup-modal.tsx
import type { PsychicReader } from "@/components/psychic-readers"; // Importer le type PsychicReader

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedReader: PsychicReader | null; // Ajouter la prop selectedReader
}

export default function SignupModal({ isOpen, onClose, selectedReader }: SignupModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Connexion/Inscription</h2>
        {selectedReader ? (
          <p className="mb-4">
            Vous avez sélectionné <span className="font-semibold">{selectedReader.name}</span> pour une consultation.
          </p>
        ) : (
          <p className="mb-4">Aucun lecteur sélectionné.</p>
        )}
        <p className="mb-4">Veuillez vous connecter ou vous inscrire pour continuer.</p>
        {/* Exemple de formulaire (à adapter selon tes besoins) */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}