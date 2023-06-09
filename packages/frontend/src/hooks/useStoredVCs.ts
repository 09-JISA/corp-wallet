import React, { useEffect } from "react";

import { getVCs, StoredVC } from "../lib/repository/vc";

export const useStoredVCs = (vcId?: string): { storedVCs: StoredVC[] } => {
  const [storedVCs, setStoredVCs] = React.useState<StoredVC[]>([]);
  useEffect(() => {
    (async () => {
      const vcs = await getVCs();
      if (vcs) {
        const storedVCs = Object.values(vcs).map((storedVC) => {
          return storedVC;
        });
        if (vcId) {
          setStoredVCs(storedVCs.filter((storedVC) => storedVC.credentialID === vcId));
        } else {
          setStoredVCs(storedVCs);
        }
      }
    })();
  }, [vcId]);
  return { storedVCs };
};
