export const getFilteredResults = (filters, unfilteredResults) => {
    
    var processedAgeGroup = 18;
    var vaccine = '';
    if(filters.vaccineFilter !== undefined
        && filters.ageGroupFilter !== undefined
        && filters.feeTypeFilter !== undefined) {
        
        const vaccineVal = Object.values(filters.vaccineFilter)
        const vaccineKey = Object.keys(filters.vaccineFilter)
        for(let i=0;i<vaccineVal.length;i++)
        {
            if(vaccineVal[i])
            {
                vaccine = vaccineKey[i]
                break;
            }
        }

        var ageGroup = '';
        const ageGroupVal = Object.values(filters.ageGroupFilter)
        const ageGroupKey = Object.keys(filters.ageGroupFilter)
        for(let i=0;i<ageGroupVal.length;i++)
        {
            if(ageGroupVal[i])
            {
                ageGroup = ageGroupKey[i]
                break;
            }
        }

        var feeType = '';
        const feeTypeVal = Object.values(filters.feeTypeFilter)
        const feeTypeKey = Object.keys(filters.feeTypeFilter)
        for(let i=0;i<feeTypeVal.length;i++)
        {
            if(feeTypeVal[i])
            {
                feeType = feeTypeKey[i]
                break;
            }
        }
        if(ageGroup === 'eighteenAndAbove')
            processedAgeGroup = 18
        else if(ageGroup === 'fortyFiveAndAbove')
            processedAgeGroup = 45
        
        const filteredResults = unfilteredResults.filter((res) => {
            
            if(res.vaccine.toUpperCase() === vaccine.toUpperCase()
                && res.fee_type.toUpperCase() === feeType.toUpperCase()
                && res.min_age_limit === processedAgeGroup) {
                    console.info('checking')
                    return res
                }
            })
        
            return filteredResults;
    }
    return [];
}