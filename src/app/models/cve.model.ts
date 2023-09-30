export class Cve {
  cve: {
    data_type: string,
    data_format: string,
    data_version: string,
    CVE_data_meta: {
      ID: string,
      ASSIGNER: string
    },
    problemtype: {
      problemtype_data:
        {
          description:
            {
              lang: string,
              value: string
            }[]
        }[]
    },
    references: {
      reference_data:
        {
          url: string,
          name: string,
          refsource: string,
          tags: string[]
        }[]

    },
    description: {
      description_data:
        {
          lang: string,
          value: string
        }[]
    },
    configurations: {
      CVE_data_version: string,
      nodes:
        {
          operator: string,
          cpe_match:
            {
              vulnerable: boolean,
              cpe23Uri: string
            }[]
        }[]
    },
    impact: {
      baseMetricV3: {
        cvssV3: {
          version: string,
          vectorString: string,
          attackVector: string,
          attackComplexity: string,
          privilegesRequired: string,
          userInteraction: string,
          scope: string,
          confidentialityImpact: string,
          integrityImpact: string,
          availabilityImpact: string,
          baseScore: number,
          baseSeverity: string
        },
        exploitabilityScore: number,
        impactScore: number
      },
      baseMetricV2: {
        cvssV2: {
          version: string,
          vectorString: string,
          accessVector: string,
          accessComplexity: string,
          authentication: string,
          confidentialityImpact: string,
          integrityImpact: string,
          availabilityImpact: string,
          baseScore: number
        },
        severity: string,
        exploitabilityScore: number,
        impactScore: number,
        acInsufInfo: boolean,
        obtainAllPrivilege: boolean,
        obtainUserPrivilege: boolean,
        obtainOtherPrivilege: boolean,
        userInteractionRequired: boolean
      }
    },
    publishedDate: string,
    lastModifiedDate: string
  };
}
